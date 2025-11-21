

// Import header
fetch("/src/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Import header
fetch("/src/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

  // import zero-DownTimePilot
fetch("/src/components/home/zeroDownTimePilot.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("zeroDownTimePilot").innerHTML = data;
  });

  // import SDLinux vs Sative Linux
  fetch("/src/components/home/sdLinuxVSNativeLinux.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("sdLinuxVSNativeLinux").innerHTML = data;
    })