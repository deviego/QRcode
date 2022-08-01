
import QRcode from 'qrcode'
import { useEffect, useRef } from 'react';
export function QRcodeCanvas({text}){
    const canvasRef = useRef();

    useEffect(() => {
        QRcode.toCanvas(canvasRef.current, text, {width:250}, (error) => console.log(error))
    })

    return (
        <div className='qrcodearea'>
            <canvas ref={canvasRef} id='canvas'></canvas>
        </div>
    )
}

