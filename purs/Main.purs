module Main where

import Effect (Effect)
import Prelude

import Data.Maybe (Maybe(..))
import Graphics.Canvas (Context2D, getCanvasElementById, getContext2D, fillPath, moveTo, lineTo, closePath)

main :: Effect Unit
main = do
  element <- getCanvasElementById "bg"
  case element of
    Just e -> drawBgPattern =<< getContext2D e
    Nothing -> pure unit
  pure unit

drawBgPattern :: Context2D -> Effect Unit
drawBgPattern ctx = do
  fillPath ctx $ do
    moveTo ctx 10.0 10.0
    lineTo ctx 20.0 20.0
    lineTo ctx 10.0 20.0
    closePath ctx
