const child = {
    selections: [" option1 ", " option2 ", " option3 "],
    parseSelections: function() {
        // Implementation of parseSelections
        this.selections = this.selections.map(selection => selection.trim().toUpperCase());
    }
};

// Example usage
child.parseSelections();
console.log(child.selections);  // Output: ["OPTION1", "OPTION2", "OPTION3"]
