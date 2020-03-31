exports.ok = (message) => {
    const styles = 'display: block; background-color: green; color: white; font-size: 1.5rem; text-align: center; text-decoration: underline;'
    showLog(message, styles);
}

exports.info = (message) => {
    const styles = 'display: block; background-color: #6699ff; color: white; font-size: 1.5rem; text-align: center; text-decoration: underline;'
    showLog(message, styles);
}

exports.error = (message) => {
    const styles = 'display: block; background-color: #ff3300; color: white; font-size: 1.5rem; text-align: center; text-decoration: underline;'
    showLog(message, styles);
}

exports.warning = (message) => {
    const styles = 'display: block; background-color: #ff9933; color: white; font-size: 1.5rem; text-align: center; text-decoration: underline;'
    showLog(message, styles);
}

exports.placeHolderMessage = () => {
    return 'I\'m a placeholder text'
}

function showLog(message, styles ) {
 console.log('%c%s',styles, message)   
}