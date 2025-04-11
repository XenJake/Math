async function solveProblem() {
    const problem = document.getElementById('problemInput').value;
    const solutionDiv = document.getElementById('solution');
    solutionDiv.textContent = 'Solving...';

    const res = await fetch('/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem })
    });

    const data = await res.json();
    solutionDiv.textContent = data.solution || `Error: ${data.error}`;
}
