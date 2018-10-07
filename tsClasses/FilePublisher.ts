declare function require(name:string);
var fs = require('fs');

export class FilePublisher // Creating the class
{
    filename: string;
    constructor(name: string)
    {
        this.filename = name;
    }

    showFile(): void
    {
        fs.readFile(this.filename, 'utf8', function(err, data)
        { // Read all of the file content
            if (err) throw err; // Print all data to the console
            let textmass = data;
            let cleanreg: string[];
            let reg:RegExp = /\s+/; // Strip of new lines, blanks and dashes
            cleanreg = textmass.split(reg);    
            let clean = cleanreg; 
            let count = {};
            for(let i of clean)
            {  // For every element in array clean
                   count[i] = (count[i]||0) + 1; // count[i] = count[i] != undefined ? count[i] + 1 : 1; // If object undefined => define and set counter to 1 otherwise increase the counter
                if(count[i] != undefined)
                {
                    count[i] = count[i]+1;
                }
                else
                {
                    count[i] = 1;
                }
            }
            let unsorted = count;
            let sorted = [];
            for (let key in unsorted) sorted.push([key, unsorted[key]]); // Copy the objects to an associative array
            sorted.sort(function (a, b)
            {
                return a[1] - b[1]; // Make the sort based on the count  
            });
 
            sorted.reverse(); // Reverse the sorted array to descending order
 
            console.log(sorted.slice(0,10)); // Show the 10 highest values 
        });  
    }
}