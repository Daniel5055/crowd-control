import { QRCodeCanvas } from "qrcode.react";

export default function Start(props: { start: () => void}) {
    return (
        <>
            <QRCodeCanvas value='http://localhost:5173' />
            <button onClick={props.start}>Start</button>
        </>
    )
}