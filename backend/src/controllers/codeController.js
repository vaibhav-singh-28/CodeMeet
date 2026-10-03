import { ENV } from "../lib/env.js"

const LANGUAGE_CONFIG = {
    javascript: { language: "nodejs", versionIndex: "7" },
    python: { language: "python3", versionIndex: "6" },
    java: { language: "java", versionIndex: "6" },
}

const JDOODLE_EXECUTE_URL = "https://api.jdoodle.com/v1/execute"
const MAX_CODE_LENGTH = 50_000

export const executeCode = async (req, res) => {
    const { language, code } = req.body ?? {}
    const languageConfig = typeof language === "string" && Object.hasOwn(LANGUAGE_CONFIG, language)
        ? LANGUAGE_CONFIG[language]
        : undefined

    if (!languageConfig) {
        return res.status(400).json({
            success: false,
            error: `Unsupported language: ${language}`,
        })
    }

    if (typeof code !== "string" || code.trim().length === 0) {
        return res.status(400).json({
            success: false,
            error: "Code must be a non-empty string.",
        })
    }

    if (code.length > MAX_CODE_LENGTH) {
        return res.status(413).json({
            success: false,
            error: `Code is too large. The limit is ${MAX_CODE_LENGTH} characters.`,
        })
    }

    if (!ENV.JDOODLE_CLIENT_ID || !ENV.JDOODLE_CLIENT_SECRET) {
        console.error("JDoodle credentials are not configured on the backend")
        return res.status(503).json({
            success: false,
            error: "Code execution is not configured on the server.",
        })
    }

    try {
        const jdoodleResponse = await fetch(JDOODLE_EXECUTE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                clientId: ENV.JDOODLE_CLIENT_ID,
                clientSecret: ENV.JDOODLE_CLIENT_SECRET,
                script: code,
                language: languageConfig.language,
                versionIndex: languageConfig.versionIndex,
            }),
        })

        const result = await jdoodleResponse.json().catch(() => ({}))

        if (!jdoodleResponse.ok) {
            const message = result.error || result.message || `JDoodle returned HTTP ${jdoodleResponse.status}.`
            return res.status(502).json({ success: false, error: message })
        }

        if (result.error) {
            return res.status(502).json({ success: false, error: result.error })
        }

        // JDoodle returns HTTP 200 for a completed run even if the program's
        // output contains compiler diagnostics. The frontend compares output
        // with the problem's expected output to determine whether tests pass.
        return res.status(200).json({
            success: true,
            output: typeof result.output === "string" ? result.output : "",
            cpuTime: result.cpuTime,
            memory: result.memory,
        })
    } catch (error) {
        console.error("JDoodle execution request failed:", error.message)
        return res.status(502).json({
            success: false,
            error: "Could not reach the code execution service. Please try again.",
        })
    }
}
