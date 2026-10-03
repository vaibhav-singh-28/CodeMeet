

function OutputPanel({ output }) {
  return (
    <section className="h-full overflow-auto bg-base-100 p-4" aria-live="polite">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Output</h2>
        {output && (
          <span className={`badge ${output.success ? "badge-success" : "badge-error"}`}>
            {output.success ? "Finished" : "Execution error"}
          </span>
        )}
      </div>

      {!output ? (
        <p className="text-sm text-base-content/60">Run your code to see the output here.</p>
      ) : (
        <>
          <pre className="min-h-24 whitespace-pre-wrap break-words rounded-lg bg-base-200 p-3 font-mono text-sm">
            {output.success ? output.output || "No output" : output.error || "Execution failed."}
          </pre>
          {output.success && (output.cpuTime || output.memory) && (
            <p className="mt-2 text-xs text-base-content/60">
              {output.cpuTime && `CPU: ${output.cpuTime}s`}
              {output.cpuTime && output.memory && " · "}
              {output.memory && `Memory: ${output.memory}`}
            </p>
          )}
        </>
      )}
    </section>
  )
}

export default OutputPanel
