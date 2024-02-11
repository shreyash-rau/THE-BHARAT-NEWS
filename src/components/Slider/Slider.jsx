// import React from 'react'

// function Slider() {
//     return (
//         <>

//             <div class="carousel-item">
//                 <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBARDw8REQ8PEhERDw8RERERDxEREA8RGBgZGRgaGBgcIS4lHB4rIRgYJjgmLC81NjU2GiQ7Qj8zPy80NTEBDAwMEA8QGhISHzEhISE0NDQ0NDQxNDQ0NDQ0MTE0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQxNDQ0NDQxNDQ0Mf/AABEIALABHgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBAUHBv/EAEgQAAIBAgIECQkFBQYHAQAAAAABAgMEERIFEyFUFhciMVGRlNHSFBVBUmFxktPiBjJkgeEHI1VikzNCQ2OjsTRyc4KiwfAk/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EADYRAAIBAQUDCAoCAwAAAAAAAAABEQIDEhNRkSFhoTFBUpLR0uHwBRQiMkJTcYGiwQRiI7Hx/9oADAMBAAIRAxEAPwDzFaGut3q9X6jzNdbvV+H9Tnpe4thDZietYT5nquw8zxM1o+8bnmW73ar1fqPMl3u1Xqj3mrKK2LDazNQXQau2WT1XYZbtM1o+8W1NEXUIuUresopYt5G8F0vD0GibNOrKnJTpylCUeaUG4tfmjf8ALqNbZc08J7xQSjV986f3Z+9YMlyzq91w9/aHXaU7WpW7l0b2/Z/Y5GUZTqeSWu/rsdcyVpa7+ux3AwXmtUT1inKrq1dhycpOQ6ys7Xf12O47zJWVp/EF2O47y4L3aonrNOVXVq7Dj5BkO0rK0/iC7Hcd5krGz39djr94wXuJ6zTlV1auw4mrZ0oaAvGlJW1TBpNY5Ytp+xtM3o3Vvbf8N++rbzVhhGl/0qb9P80vyOdVm5ylObc5SeMpSxcpP2tmsKhcu0yra0q20q6t62v7So++3cizg7e7tL46XiHBy93afx0vEUKETJU4+wuHZ5PXwJfts11X3i3g5e7tP46XiHBy93afx0/EV6uPsGriXCoyeoxLbNdV94s4OXu7T+On4hwcvd2n8dPxFerj7CNXH2DCoyeov22a6r7xZwcvd2n8dPxDg7e7tP46fiKnCPQQ4R/+RMOzyevgW/bZrqvvE3Wh7mlHPUoThDHDNhjFP2tN4fmaWQ6lndzoTzUp4YrCUWlKlUj6VOL2SXvNypGyrcrO7Sf9+nqqlai3002tsfc/yM4NL916lx7Sl+2pWaT4ra9J3wfPZBkO27Kz39djr95DsrT+ILsdx3kwXu1L6zTlV1auw4uQjKdh2Vr/ABBdjuO8h2Vr/EF2O4GA92pfWacqurV2HIyjKdXyO139djuCVa2aeMryc0ueFK1qKpL2JzeC97JgvNaouPTlV1auw5dOnKTUYxcpN4KMU25P2JG75kvN2rfD+pdV0plTjbQVvB4pyi81xNfzVXtXujgjnR59u3HnxF2zXLL+mz/fKavWj27KfrtfBqNWbfmS73ar8K7x5lu92q/D+pruC6DCMVzPnRYslzPVdgTtHzrR942vM11u9X4f1Ieh7tc9vU6l3mrOCw2FWBl4S5qtV2FWI+daPvEpFyK4tGUpbDmjbEXi8eomU8EYxa6SJPETsEbSMScxgCFM8wzGIEiDLMTnMAWWSDPOTrCsCRdRZrSdYUgXmLqLtYTrSgFvsXUX60a0oAvMl1F+tGtKAS8xdRfrSNYUgt9luou1hGsKgS8xdRZnGcrJF4XUZZhmMASRBlnJzGJAllgyzDExABdGeKIk8HiYxeBk2mucs7CRtJZU0WRls2mMmgwYAAyUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAspUZzbUISk1GU2oxcnGMVjKTw5kltb9BZTsq0qcq0aFaVKDwnVjSlKlB/zTSwXWdT7KXlCjcVvKJyp061je22sjCVRwlVpuEXljtaTZ9NafaGxowtsl7XcLO1ubZ2cbecKF/KoqmFSXKwipZ4uSkm+Rs6SSag+Fp2lWTpqNKpJ1M2rUac26uHPkwXKwwfMZ+brjPKHk9fPFxUoampmi5PCOMcMVi9i6T0O3+12i1PR8FrqcNGVIwoV3BzlcUp0JQqvJGKcHnyzwbeOL5uZNH/bGyo6mlO4uK+o8gTu6tKWsuMl1rprLi5KMYvCOLxe0l4sHnMLOtJwUaNWTqTnCmlTm3OcfvRiktrWKxS5jG5t6lKcqdSnOnUj96E4ShKPvjJJo9Fl9tLGpGjip21WrS0nC4qU6c3GhXrSt8KkFFp5ZqjLMovMnOWHt+U+0txaXF+pUKtSNu4W8J1Z+UVnBqKU5RVSTm4p44Rb5iySD58GxCnTetzVXFQhJ0nq5PXTUklHn5OKbeL5sMCHCGqU9Z+81ji6WR7IZU1PPzc+Ky8+zESSCgG06VLPSiq7cJxpOpPVSWpcvvrLjjPL0rnIhSpOVVOs1GEajpT1UnrpJ8iOGPIzLbi+YSINYF+rhqs2ses1mXVZHhky458/Nz7MuGPpFxTpxyZKrqZqcJS5Dhq5vHGO18rDZylseJZEFAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAASQSCnT0JTjKpUzRhNqlHDPDPFSlWpQxw9OyTPQeA0fWtOxfWefaBeFSrzY6lNKU4Qxca1KWCcmljhFnpL+2dPdp9psvmHusEri887Pgelav5SrWBvnkypjl+/Ia3AePrWnY/rHAePrWnY/rNjhpT3efarL5g4aU93n2qy+YdoW/ifKv+lPN01+A8fWtOx/WOA8fWtOx/WbHDSnu8+1WXzBw0p7vPtVl8wQt/EX/Snm6a/AePrWnY/rHAePrWnY/rNjhpT3efarL5g4aU93n2qy+YIW/iL/AKU83TX4Dx9a07H9Y4Dx9a07H9ZscNKe7z7XZfMHDSnu8+1WXzBC38Rf9Kebpr8B4+tadj+scB4+tadj+s2OGlPd59qsvmDhpT3efarL5ghb+Iv+lPN01+A8fWtOx/WTwGj61p2L6y/hpT3efarL5hPDSnu0+1WXzCQt/EX/AEp5unw32jpqzupUFRs5qMKcs3k2VvMsebMcrzh+Gs/6H1HW+1DneXcq8IQhGUKccs7q1zYxWHomcjzXW/yu02/jPNVjS4mD9N/HuYNGLF6FO3n1J84fhrP+h9Q84fhrP+h9RHmut/ldpt/GPNdb/K7Tb+Mz/n3+fsdv8Ga18Sy3vs1SnF21lhKcE8KG3BtLpNW+ilWrxikoxrVYxS5klJpI2rbR1RVKbbpJKcG35TbbEmm/75rX7Tr12mmnXrNNPFNOTwwJXfue3n+i2dy/7GTk1gAcDsAAAAAAAAAAAAASQCgEkFICSAQpIIAEkggCBIJIAgSSCAIEgkgCBIJIAgSSCAIEk4AgCEJJBAEISyQQAJAABAAAAAAAAAACTJRLAMcBgWKJOUt0l4qILXExaI0JMASQQoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJSABOBKRmomkiNleUYFuUhxK6SXiogzaMTLRomKLVB9BVFm3CSa95uhSYqcEQpyfoDjgW0Z4Yx6P9iK/Pj0/wC51hRJzlzBRJFckWNlcjmzaK5EGUiDmzoiATgTgQGIMsCMACAZZRlLAkxBllGUQJMQZZRlECTEGWUZRAkxBllGUQJMQZZRlIDEE4DAAgGWBGBQQZRIJQQZYiyJVFmakdUzm0Z4ETj7C2g/T1CpPFpfmzUKJMp7TWkn0MrZs1ZbDVZyq2M6Uguoy9Bsp2XRe9dDuCdj0X3xUO46qzj4qdfAw7Sfhehg3g0/yfuLpJNNdRGax6L74rfuJzWPRf8AxW/cbSXSp18Dm6ns9l6Gqy6zsqlaTjSpuWXbJ7FCC6ZSeyK95dGrYx5Sp3VRrmhVq0402/a4LHD2Iqu9J1asVBtRpx+7SpJQox/7Vzv2vFmYoXK5+nbzGprfuqPr2Jy+Bd5oe+aO7X+g8zvfNHdq/Q5uPsJzEv2fR4s54dv0/wAfE6nmf8Zo7ta8IWhvxmje2focxSJUi3rPo8WR2dv8z8fE6fmf8Zo3ti8JPmZ75oztq7jlqZkplvWfR4kw/wCR8z8V2m9eaKq0YxlLJOE/u1qUlVoyfQpr0+xmqqRs2OlKlDMoNShPZUo1EpUaseiUf/a2mzK50fJ5sl9Tb26um6NSnB+lRctrXvKlQ+Rx9S3rWjZWp3r9rlXFHO1IVA6Cq6O9bSPw23eTrtHetpHqt+81dpzWpnGq6NWhoKgPJzoa/R3raR6rbvJ12jvW0j1W3eLtGa1JjVdGrQ53k5GoOlrtHetpHqt+8jXaO9bSPVb94u0ZrUY1fRq0OdqDHVHS1+jvW0j1W/eQ6ujvW0j8Nv3ku0ZrUuNV0atDmukb9LQtWVONSUqFCE/7N3VbU61dME1i17S6N/aUuVRpVqlT+75Vk1VN+soR++/fsOddXs6s5TqTlOcueUnt/Rewy7lPLtLNtX7vsrNrbp+3pzm29DPfNGdtj3GL0M980b2xdxztYHIXrPLiTD/kfM/HxOg9D/jNG9s/QeZ/xmju1rwnOzEZiXrPo8Waw7f5n4+J0Hoh75o7tf6Ex0NOTwp3FlOT5oU7pOpN9EU0sX7Dm4kYkv2fR4s2qLdfH+PiW1qUoTcKkZQnHnjKLjJe9MxRu0tKycVCvGNxTSwiqresh/yVVyo+7avYQ5WHRfL2Zrd4fngLtL5Kl99n/TV6tbKqdNq/TRVikvcVxfp9LNjNYdF912/cQ3Y9F98VDuNOmfip18CXv61aGlUeLKzoN2PRe/FQ7iGrL0eW/m6Bh2X9qdfA2rT+r0PY+Jay3286qPhHEtY75edVHwnqQPJLPTCPLeJay3286qPhHEtZb7edVHwnqQEsQjy3iWst8vOqj4RxLWO+XnVR8J6kCSxCPLeJay3286qPhHEtZb7edVHwnqQLLEI8t4l7LfLzqo+EcS9lvt51UfCepASxCPLeJay3286qPhHEvZb7edVHwnqQEsQjyt/sasMVHy27xabS/c7UsMcFl9q6zLiXst9vOqj4T7Kroq4lUlPXNYSqypPXVXKOaVNpPBJZOS1kww5scTXnoS5ng6lRSlGjKksLm4jjyaWEngueUqTb6M+O1raliEfK8S9lvt51UfCOJey3286qPhPsaeirnNPPc1WnUqSilcyWCcZqCjhBZcHKOx5lyU/YVy0TdYScaqjOSp5n5TcrlRhKCe3HHBuEv5mmngJYhHyHE3Y45fLrvM02o/uMWlsbwy821dZnxL2W+3nVR8J9jR0ZdRrUqkqubV61TTq1H5QpuLTeMeRhlxyR5OzDbjsyuNH3UnNxrZcak2pKvWWVNPLyEsOR6vNPneAliEfGcTFlvt51UfCQ/wBjNjsTvrvbzY6nb/4n3Oj9HV6dSMp1pzWVxmnWqTTbjDaoy2J5lJ49Dw9hbeaO1moUlGoqXKcqijnqTilkxajhFZuU2ktsVghLEI+B4mbHfrv/AEfCQv2M2O/XfT/gc3wn19LQ9RRhmo26eW4jU1dacYxVSODjTSp8mOKXwpvFiGgamaE5aqTjTnHVvLq5YuahFtQTyqM5J+hvB5dm1LEI+R4mLHfbvmx/web4Qv2MWO/Xn+j4T6yOgqigoYUl/wDncM6m82dVFUhFp02pQWGDx58XyVibOidDyt6qeMZQUJRU3/bVMyppKSwSSjkeGHoaWCw2pYhHxfEvZb7edVHwkcS9lvt51UfCepASxCPLeJay3286qPhHEtZb7edVHwnqQEsQjy3iWst9vOqj4RxLWW+3nVR8J6kBLEI8t4lrHfLzqo+EcS1lvt51UfCepASxCPLeJay3286qPhHEtZb7edVHwnqQEsQjy3iWst9vOqj4RxLWO+XnVR8J6kBLEI//2Q==" alt="..." />
//                 <div class="carousel-caption d-none d-md-block">
//                     <h5>..slider..</h5>
//                     <p>..slider..</p>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Slider

import React, { useState } from 'react';
import "../Slider/Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };
  
    return (
      <div className='slide'>
        {currentSlide === 0 && <div>Slide n°1</div>}
        {currentSlide === 1 && <div>Slide n°2</div>}
        {currentSlide === 2 && <div>Slide n°3</div>}
        <button onClick={prevSlide}>Previous</button> &nbsp;
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };
export default Slider;
