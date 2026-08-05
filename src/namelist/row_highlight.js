/*
 * Small row-highlighting helper used by the namelist editor UI.
 */

// Row Highlight Logic (v0.4.3)

function applyRowState(row, state) {
    row.classList.remove("row-error", "row-warning", "row-valid");

    if (state === "error") {
        row.classList.add("row-error");
    } else if (state === "warning") {
        row.classList.add("row-warning");
    } else if (state === "valid") {
        row.classList.add("row-valid");
    }
}
