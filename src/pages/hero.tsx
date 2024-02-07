import heroImage from '../images/hero.png';

export default function Hero(): JSX.Element {

    return (
        <div id='hero'>
            <div className='hero-left'>
                <h1>Hey. I'm <span>Kenny Wilde</span>.</h1>
                <p>I'm a Software Engineer from Dublin, Ireland. I create simple and elegent UIs using technologies such as Typescript, React and NodeJS.</p>
                <a>Learn more about me</a>
            </div>
            <div className='hero-right'>
                <img src={heroImage.src} />
            </div>
        </div>
    );
}
