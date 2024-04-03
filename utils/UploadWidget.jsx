import { useEffect, useRef, useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    const [imageUrl, setImageUrl] = useState('');

    // useEffect(() => {
    //     cloudinaryRef.current = window.cloudinary;
    //     widgetRef.current = cloudinaryRef.current.createUploadWidget({
    //         cloudName: 'djrdw0sqz',
    //         uploadPreset: 'openMedia'
    //     }, function (error, result) {
    //         console.log(result);
    //         console.log('Image URL:', result.info.secure_url);

    //         // Handle the result or error here
    //     });
    // }, []);

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'djrdw0sqz',
            uploadPreset: 'openMedia'
        }, function (error, result) {
            // if (!error && result && result.event === 'success') {
            console.log('Image URL:', result.info.secure_url);
            const url = result.info.secure_url;
            setImageUrl(result.info.secure_url);
            console.log('state: ', imageUrl);
            // } else {
            // console.error('Error uploading image:', error);
            // }
        });
    }, []);

    return (
        <MdAddPhotoAlternate onClick={() => { widgetRef.current.open() }} className='text-gray-500 hover:text-gray-900 ' size={30} />
    );

};

export default UploadWidget;
