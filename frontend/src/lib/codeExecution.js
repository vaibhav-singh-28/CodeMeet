import axiosInstance from "./axios"

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const { data } = await axiosInstance.post("/code/run", { language, code })
    return data
  } catch (error) {
    return {
      success: false,
      error:
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Failed to execute code.",
    };
  }
}
