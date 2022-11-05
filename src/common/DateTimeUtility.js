export const formatDate = (date) => {
    const dateObject = new Date(date)
    const timeOptions = {year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit"};

    return dateObject.toLocaleTimeString(navigator.language, timeOptions)
}