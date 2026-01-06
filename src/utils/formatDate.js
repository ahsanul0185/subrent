
const formatDate = (input) => {
    let dateObj;

    if (input instanceof Date) {
        dateObj = input;
    } else if (typeof input === 'string') {
        dateObj = new Date(input + 'T00:00:00');
    } else {
        return "Invalid Input";
    }


    return dateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};


export default formatDate