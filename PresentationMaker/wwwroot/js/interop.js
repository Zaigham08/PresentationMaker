window.downloadFile = function (byteArray, fileName) {
    // Convert byte array to Blob
    var blob = new Blob([new Uint8Array(byteArray)], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" });

    // Create a download link
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the DOM and trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
