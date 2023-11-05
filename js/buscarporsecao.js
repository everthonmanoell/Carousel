
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  var searchTerms = {
    "seção 1": "section1",
    "seção 2": "section2",
    "seção 3": "section3",
  };

  if (searchTerms[searchTerm]) {
    var targetSection = document.getElementById(searchTerms[searchTerm]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});
