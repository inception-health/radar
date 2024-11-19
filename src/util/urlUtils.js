const QueryParams = require('../util/queryParamProcessor')

function constructSheetUrl(sheetName) {
  const noParamsUrl = window.location.href.substring(0, window.location.href.indexOf(window.location.search))
  const queryParams = QueryParams(window.location.search.substring(1))
  const sheetUrl =
    noParamsUrl +
    '?' +
    ((queryParams.documentId && `documentId=${encodeURIComponent(queryParams.documentId)}`) ||
      (queryParams.sheetId && `sheetId=${encodeURIComponent(queryParams.sheetId)}`) ||
      '') +
    '&sheetName=' +
    encodeURIComponent(sheetName)
  return sheetUrl
}

function getDocumentOrSheetId() {
  const sheetID = '1oQcTYR6nkaZshQ2AN0TQ_DeGxFx57O8UaCWcKcHJsao'
  console.log('sheetID', sheetID)
  if (sheetID) {
    return sheetID
  }
  const queryParams = QueryParams(window.location.search.substring(1))
  return queryParams.documentId ?? queryParams.sheetId
}

function getSheetName() {
  const queryParams = QueryParams(window.location.search.substring(1))
  return queryParams.sheetName
}

module.exports = {
  constructSheetUrl,
  getDocumentOrSheetId,
  getSheetName,
}
