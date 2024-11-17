function downloadPDF() {
  const link = document.createElement('a')
  link.classList.add("link__fake")
  link.href = 'docs/Curriculum-Guilherme.pdf"'
  link.download = 'Curriculum-Guilherme.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}