export const widthPercentageToDP = (width:number) => {
    return (window.innerWidth*width)/100
}

export const heightPercentageToDP = (height:number) => {
    return (window.innerHeight*height)/100
}