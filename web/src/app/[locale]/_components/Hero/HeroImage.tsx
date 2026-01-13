import Image from "next/image";
import { imagePaths } from '@/constants/images';
const HeroImage = () => {
  return (
    <div className="wrapper-img">
      <div className="wrapper-perfil relative">
        <div className="circle clr-1"></div>
        <div className="circle clr-2"></div>
        <div className="circle clr-3"></div>
        
        <div className="circle clr-4">
          <Image
              width={300}
              height={300}
              // src={imagePaths.generic.placeholder}
              // src={imagePaths.generic.i7}
              src={imagePaths.generic.i9}
              // src={imagePaths.generic.i10}
              // src={imagePaths.generic.i11}
              // src={imagePaths.generic.i12}

              alt="Hero placeholder"
              priority
              loading="eager"
              decoding="async"
              placeholder="empty"
          />
        </div>
      </div>
    </div>      
  )
}
export default HeroImage