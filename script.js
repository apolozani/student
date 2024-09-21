// script.js

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    document.getElementById('generateBtn').addEventListener('click', () => {
        // Retrieve form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const studentID = document.getElementById('studentID').value.trim();
        const date = document.getElementById('date').value;

        // Basic validation
        if (!firstName || !lastName || !studentID || !date) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Add content to PDF
        doc.setFontSize(20);
        doc.text('Certificate - Student', 105, 20, null, null, 'center');

        doc.setFontSize(12);
        doc.text(`Name: ${firstName}`, 20, 40);
        doc.text(`Last Name: ${lastName}`, 20, 50);
        doc.text(`Student ID: ${studentID}`, 20, 60);
        doc.text(`Date: ${date}`, 20, 70);

        doc.setFont("helvetica", "bold");
        doc.text(`Student is registered as full-time student in the "Univesity of St. Cyrilus and Methodius"`,20, 80)
        doc.text(`Faculty: Faculty of Computer Science and Engineering (FCSE)`, 20, 90);
        
        doc.setFontSize(16);
        doc.text(`Study Program: Software Engineering and Information Systems`, 20, 100);

        doc.setFont("consolas","regular")
        doc.text(`STUDY PROGRAM CODE: SEIS23`, 20, 110);

        // Save the PDF
        doc.save(`${studentID}_${firstName}_${lastName}_Information.pdf`);
    });
});
