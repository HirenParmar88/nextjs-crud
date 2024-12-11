// src/components/imagegallary/ImageGallary.jsx

'use client';

function ImgGallary() {
    // Reusable images and labels
    const images = [
        { label: 'Image 1', src: 'image/img5.png' },
        { label: 'Img 2', src: '/image/user_img.jpg' },
        { label: 'Img 3', src: '/image/img5.png' },
        { label: 'Img 4', src: '/image/user_img.jpg' },
        { label: 'Img 5', src: '/image/img5.png' },
        { label: 'Img 6', src: '/image/user_img.jpg' },
    ];

    return (
        <div
            className="mt-0 mb-0"
            style={{
                height: '1500px',
                width: '200px',
                backgroundColor: '#f8f9fa',
                padding: '20px 50px 20px 20px',
                margin:'110px'
                //overflowY: 'auto',
            }}
        >
            {images.map((image, index) => (
                <div key={index} className="mb-4">
                    <p>{image.label}</p>
                    <img
                        src={image.src}
                        className="rounded img-fluid mx-auto d-block"
                        alt={image.label}
                        style={{ maxWidth: '150px' }}
                    />
                </div>
            ))}
        </div>
    );
}

export default ImgGallary;
