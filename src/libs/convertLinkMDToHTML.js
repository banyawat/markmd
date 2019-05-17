const linkFilter = /(?<=\[(.+)\]\(.+).md(?=.*?\))/g

const convertLinkMDToHTML = (document = '') => {
  const parsedMDLink = document.replace(linkFilter, '.html')
  return parsedMDLink
}

export default convertLinkMDToHTML
