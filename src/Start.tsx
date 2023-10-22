import { QRCodeCanvas } from "qrcode.react";

export default function Start(props: { start: () => void}) {
    return (
        <>
            <QRCodeCanvas value='https://db255.teaching.cs.st-andrews.ac.uk' />
            <button onClick={props.start}>Start</button>
        </>
    )
}