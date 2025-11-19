import { useEffect } from 'react'

const iconCheck = '/images/icon-check.svg'

interface SuccessModalProps {
  onClose: () => void
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full p-8 md:p-10 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <img src={iconCheck} alt="Success" className="mx-auto w-16 h-16" />
        </div>
        
        <h2 className="text-2xl font-bold text-black mb-4">
          Thanks for your support!
        </h2>
        
        <p className="text-dark-gray mb-6 leading-relaxed">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. 
          You will get an email once our campaign is completed.
        </p>
        
        <button
          onClick={onClose}
          className="bg-moderate-cyan hover:bg-dark-cyan text-white font-bold px-8 py-3 rounded-full transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

export default SuccessModal

