import './card.css';
import { useState } from 'react';

interface Props {
  frontCard: stateFront,
  backCard: stateBack
}

export default function Card({ frontCard, backCard }: Props) {

  const { profession, title } = frontCard;
  const { phone, mail, siteWeb, socialMedia } = backCard;
  // card front
  const [selectedFont, setSelectedFont] = useState('monospace');
  const [bgFront, setBgFront] = useState('#333132');
  const [fontColor, setFontColor] = useState('#fcfcfc');
  // card back
  const [backgroundColor, setBackgroundColor] = useState('#FCFCFC');
  const [pathColor, setPathColor] = useState('#E17E0E');
  const [groupColor, setGroupColor] = useState('#3C3C3C');
  const [color, setColor] = useState('#333132');

  return (
    <>
      <div className="cardContainer">
        <section>
          {/* Front */}
          <svg id='svgFront' style={{ maxWidth: 500 }} width="100%" height="100%" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="250" fill={bgFront} />
            <text x={(500 - title.length * 10) / 2} y="130" fill={fontColor} fontFamily={selectedFont} fontSize="28">
              {title}
            </text>
            <text x={(500 - profession.length * 10) / 2} y="155" fill={fontColor} fontFamily={selectedFont} fontSize="14">
              {profession}
            </text>
          </svg>
          {/* back */}
          <svg id='svgBack' style={{ maxWidth: 500 }}  width="100%" height="100%" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_154_45)">
              <path d="M500 0H0V250H500V0Z" fill={backgroundColor} fillOpacity="0.988235" /> 
              <path d="M41 0H27V250H41V0Z" fill={groupColor} />
              <path d="M0 250V0H27V250H0Z" fill={pathColor} />
              <path d="M83.62 70.79C85.06 73.62 87.38 75.94 90.21 77.38L92.41 75.18C92.69 74.9 93.08 74.82 93.43 74.93C94.55 75.3 95.75 75.5 97 75.5C97.2652 75.5 97.5196 75.6054 97.7071 75.7929C97.8946 75.9804 98 76.2348 98 76.5V80C98 80.2652 97.8946 80.5196 97.7071 80.7071C97.5196 80.8946 97.2652 81 97 81C92.4913 81 88.1673 79.2089 84.9792 76.0208C81.7911 72.8327 80 68.5087 80 64C80 63.7348 80.1054 63.4804 80.2929 63.2929C80.4804 63.1054 80.7348 63 81 63H84.5C84.7652 63 85.0196 63.1054 85.2071 63.2929C85.3946 63.4804 85.5 63.7348 85.5 64C85.5 65.25 85.7 66.45 86.07 67.57C86.18 67.92 86.1 68.31 85.82 68.59L83.62 70.79Z" fill="black" />
              <path d="M96 109.001C96.5304 109.001 97.0391 109.212 97.4142 109.587C97.7893 109.962 98 110.471 98 111.001V125.001C98 125.531 97.7893 126.04 97.4142 126.415C97.0391 126.79 96.5304 127.001 96 127.001H82C81.4696 127.001 80.9609 126.79 80.5858 126.415C80.2107 126.04 80 125.531 80 125.001V111.001C80 110.471 80.2107 109.962 80.5858 109.587C80.9609 109.212 81.4696 109.001 82 109.001H96ZM95.5 124.501V119.201C95.5 118.336 95.1565 117.507 94.5452 116.896C93.9338 116.284 93.1046 115.941 92.24 115.941C91.39 115.941 90.4 116.461 89.92 117.241V116.131H87.13V124.501H89.92V119.571C89.92 118.801 90.54 118.171 91.31 118.171C91.6813 118.171 92.0374 118.318 92.2999 118.581C92.5625 118.844 92.71 119.2 92.71 119.571V124.501H95.5ZM83.88 114.561C84.3256 114.561 84.7529 114.384 85.0679 114.069C85.383 113.754 85.56 113.327 85.56 112.881C85.56 111.951 84.81 111.191 83.88 111.191C83.4318 111.191 83.0019 111.369 82.685 111.686C82.3681 112.003 82.19 112.433 82.19 112.881C82.19 113.811 82.95 114.561 83.88 114.561ZM85.27 124.501V116.131H82.5V124.501H85.27Z" fill="black" />
              <path d="M97 158.001L89 163.001L81 158.001V156.001L89 161.001L97 156.001M97 154.001H81C79.89 154.001 79 154.891 79 156.001V168.001C79 168.531 79.2107 169.04 79.5858 169.415C79.9609 169.79 80.4696 170.001 81 170.001H97C97.5304 170.001 98.0391 169.79 98.4142 169.415C98.7893 169.04 99 168.531 99 168.001V156.001C99 154.891 98.1 154.001 97 154.001Z" fill="black" />
              <path d="M93.36 208.001C93.44 207.341 93.5 206.681 93.5 206.001C93.5 205.321 93.44 204.661 93.36 204.001H96.74C96.9 204.641 97 205.311 97 206.001C97 206.691 96.9 207.361 96.74 208.001M91.59 213.561C92.19 212.451 92.65 211.251 92.97 210.001H95.92C94.96 211.651 93.43 212.931 91.59 213.561ZM91.34 208.001H86.66C86.56 207.341 86.5 206.681 86.5 206.001C86.5 205.321 86.56 204.651 86.66 204.001H91.34C91.43 204.651 91.5 205.321 91.5 206.001C91.5 206.681 91.43 207.341 91.34 208.001ZM89 213.961C88.17 212.761 87.5 211.431 87.09 210.001H90.91C90.5 211.431 89.83 212.761 89 213.961ZM85 202.001H82.08C83.03 200.341 84.57 199.061 86.4 198.441C85.8 199.551 85.35 200.751 85 202.001ZM82.08 210.001H85C85.35 211.251 85.8 212.451 86.4 213.561C84.57 212.931 83.03 211.651 82.08 210.001ZM81.26 208.001C81.1 207.361 81 206.691 81 206.001C81 205.311 81.1 204.641 81.26 204.001H84.64C84.56 204.661 84.5 205.321 84.5 206.001C84.5 206.681 84.56 207.341 84.64 208.001M89 198.031C89.83 199.231 90.5 200.571 90.91 202.001H87.09C87.5 200.571 88.17 199.231 89 198.031ZM95.92 202.001H92.97C92.65 200.751 92.19 199.551 91.59 198.441C93.43 199.071 94.96 200.341 95.92 202.001ZM89 196.001C83.47 196.001 79 200.501 79 206.001C79 208.653 80.0536 211.197 81.9289 213.072C82.8575 214.001 83.9599 214.737 85.1732 215.24C86.3864 215.742 87.6868 216.001 89 216.001C91.6522 216.001 94.1957 214.947 96.0711 213.072C97.9464 211.197 99 208.653 99 206.001C99 204.688 98.7413 203.387 98.2388 202.174C97.7362 200.961 96.9997 199.858 96.0711 198.93C95.1425 198.001 94.0401 197.265 92.8268 196.762C91.6136 196.26 90.3132 196.001 89 196.001Z" fill="black" />
              <path d="M500 0L347 250H500V0Z" fill={pathColor} />
              <g filter="url(#filter0_d_154_45)">
                <path d="M488 0L331 235H488V0Z" fill={groupColor} />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_154_45" x="327" y="0" width="165" height="243" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_154_45" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_154_45" result="shape" />
              </filter>
              <clipPath id="clip0_154_45">
                <rect width="500" height="250" fill="white" />
              </clipPath>
            </defs>
            <text x="90" y="30" fill={color} fontFamily={selectedFont} fontSize="20">
              {title}
            </text>
            <text x="90" y="45" fill={color} fontFamily={selectedFont} fontSize="14">
              {profession}
            </text>
            <text x="115" y="80" fill={color} fontFamily={selectedFont} fontSize="16">
              {phone}
            </text>
            <text x="115" y="125" fill={color} fontFamily={selectedFont} fontSize="16">
              {socialMedia}
            </text>
            <text x="115" y="165" fill={color} fontFamily={selectedFont} fontSize="16">
              {mail}
            </text>
            <text x="115" y="210" fill={color} fontFamily={selectedFont} fontSize="16">
              {siteWeb}
            </text>
          </svg>
        </section>
        {/* secction edit */}
        <h2 style={{ marginTop: 10, marginBottom: 10 }}>Editar colores y fuente</h2>
        <section className='cardEdit'>
          <div className='cardEditFrontx'>
            <h2>Frente</h2>
            <label htmlFor="color">Fondo
              <input className='inputColor' type="color" id="color" value={bgFront} onChange={(e) => setBgFront(e.target.value)} />
            </label>
            <label htmlFor="color">Texto
              <input className='inputColor' type="color" id="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
            </label>
            <label htmlFor="fontFamily">Fuente
              <select className='cardSelect' id="fontFamily" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
                <option value="monospace">Monospace</option>
                <option value="Arial">Arial</option>
                <option value="Cursive">Cursive</option>
                <option value="Verdana">Verdana</option>
              </select>
            </label>
          </div>
          <div className='cardEditBackx'>
            <h2>Dorso</h2>
            <label htmlFor="color">Texto
              <input className='inputColor' type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <label htmlFor="backgroundColor">Fondo
              <input className='inputColor' type="color" id="backgroundColor" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
            </label>
            <label htmlFor="pathColor">GP 1
              <input className='inputColor' type="color" id="pathColor" value={pathColor} onChange={(e) => setPathColor(e.target.value)} />
            </label>
            <label htmlFor="groupColor">GP 2
              <input className='inputColor' type="color" id="groupColor" value={groupColor} onChange={(e) => setGroupColor(e.target.value)} />
            </label>
          </div>
          <button className='btn'>Desacargar tarjeta</button>
        </section>
      </div>
    </>
  )
}

