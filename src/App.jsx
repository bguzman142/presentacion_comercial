import { AnimatePresence } from 'framer-motion'
import { usePresentationStore } from './store/presentationStore'
import { useEffect } from 'react'
import { useKeyboard } from './hooks/useKeyboard'
import useSwoosh from './hooks/useSwoosh'

import CanvasContainer from './components/canvas/CanvasContainer'
import LoadingScreen from './components/ui/LoadingScreen'
import NavBar from './components/ui/NavBar'
import ProgressBar from './components/ui/ProgressBar'
import ControlsPanel from './components/ui/ControlsPanel'
import SlideAudio from './components/shared/SlideAudio'
import PreloadVideos from './components/shared/PreloadVideos'
import RotateDevice from './components/ui/RotateDevice'

import HeroPanel from './components/panels/HeroPanel'
import IntroPanel from './components/panels/IntroPanel'
import CatalogPanel from './components/panels/CatalogPanel'
import AuthPanel from './components/panels/AuthPanel'
import ProfilePanel from './components/panels/ProfilePanel'
import CartPanel from './components/panels/CartPanel'
import PaymentsPanel from './components/panels/PaymentsPanel'
import IAPanel from './components/panels/IAPanel'
import AdminPanel from './components/panels/AdminPanel'
import DatabasePanel from './components/panels/DatabasePanel'
import ApiPanel from './components/panels/ApiPanel'
import ClosingPanel from './components/panels/ClosingPanel'
import ClosingPanel15 from './components/panels/ClosingPanel15'

const PANELS = {
  1:  HeroPanel,
  2:  IntroPanel,
  3:  CatalogPanel,
  4:  AuthPanel,
  5:  ProfilePanel,
  6:  CartPanel,
  7:  PaymentsPanel,
  8:  IAPanel,
  9:  AdminPanel,
  10: DatabasePanel,
  11: ApiPanel,
  12: ClosingPanel,
  13: ClosingPanel15,
}

export default function App() {
  const { currentSlide, nextSlide, prevSlide, direction, loadingDone } = usePresentationStore()
  const swoosh = useSwoosh()
  useKeyboard(nextSlide, prevSlide)

  useEffect(() => { swoosh(currentSlide) }, [currentSlide, swoosh])

  const ActivePanel = PANELS[currentSlide]

  return (
    <RotateDevice>
      <LoadingScreen />
      <CanvasContainer />

      {loadingDone && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1400px',
          }}
        >
          <ProgressBar />

          <AnimatePresence mode="wait" custom={direction}>
            {ActivePanel && <ActivePanel key={currentSlide} custom={direction} />}
          </AnimatePresence>

          <NavBar />
        </div>
      )}

      <ControlsPanel />
      <SlideAudio />
      <PreloadVideos />
    </RotateDevice>
  )
}
