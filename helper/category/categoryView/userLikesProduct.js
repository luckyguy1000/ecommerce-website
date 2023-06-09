const userLikesProduct = (userLikes, product) => {

    if ( !userLikes || !product )
        return;

    let likeId = false;
    userLikes.forEach(like => like?.product?._id === product?._id ? likeId = like._id : null);
    return likeId;
}

export default userLikesProduct;