/**
 * MIT License
 *
 * Copyright (c) 2020 ManBang Group
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import Widget from '../core/Widget'
import VNode from '../core/VNode'
import { AppBar } from '../core/basicWidget'

export type ThreshWidget = Widget<any, any>
type ThreshWidgetType = VNode | string | number | undefined

type RefCallback = (ref: Widget<any, any>) => void
type EventCallback = (e?: any) => any
type AsyncEventCallback = (e?: any) => Promise<void>
type BorderStyle = 'solid'
type BorderSide = 'top' | 'bottom' | 'left' | 'right'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'spaceBetween' | 'spaceAround' | 'start' | 'end'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' |'baseline' | 'start' | 'end'
type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'spaceBetween' | 'spaceAround'
type TextWeight = 'normal' | 'light' | 'bold' | 'bolder'
type TextAlign = 'left' | 'right' | 'center'
type TextOverflow = 'ellipsis' | 'visible' | 'fade' | 'clip'
type TextDecoration = 'none' | 'lineThrough' | 'overline' | 'underline'
type ImageFit = 'fill' | 'contain' | 'cover' | 'fitWidth' | 'fitHeight' | 'scaleDown' | 'none'
type Direction = 'vertical' | 'horizontal'
type IconType = 'loading' | 'apps' | 'arrow_back' | 'arrow_back_ios' | 'arrow_downward' | 'arrow_drop_down' | 'arrow_drop_up' | 'arrow_forward' | 'arrow_forward_ios' | 'arrow_left' | 'arrow_right' | 'arrow_upward' | 'check' | 'check_circle' | 'check_circle_outline' | 'add' | 'add_circle' | 'add_circle_outline' | 'close' | 'cancel' | 'create' | 'chevron_left' | 'chevron_right' | 'aexpand_lesspps' | 'expand_more' | 'refresh' | 'fullscreen' | 'fullscreen_exit' | 'more_horiz' | 'more_vert' | 'unfold_less' | 'unfold_more' | 'control_point' | 'crop' | 'adjust' | 'camera' | 'camera_alt' | 'image' | 'broken_image' | 'phone_iphone' | 'phone_android' | 'watch' | 'tv' | 'headset' | 'computer' | 'cloud_done' | 'cloud_download' | 'cloud_upload' | 'cloud_off' | 'folder' | 'title' | 'insert_link' | 'insert_chart' | 'format_quote' | 'format_list_bulleted' | 'format_list_numbered' | 'attach_file' | 'attach_money' | 'access_alarms' | 'account_box' | 'account_circle' | 'bookmark' | 'bookmark_border' | 'fingerprint' | 'gif' | 'home' | 'info' | 'info_outline'
type KeyboardType = 'text' | 'multiline' | 'number' | 'decimalNumber' | 'phone' | 'datetime' | 'emailAddress' | 'url'
type Alignment = 'topLeft' | 'topCenter' | 'topRight' | 'center' | 'centerLeft' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'

export interface ToastInfo {
  name?: string,
  stayTime?: number,
  duration?: number,
  mask?: boolean,
  position?: Positioned | Positioned[]
  opacity?: number | number[]
}

export interface Positioned {
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  width?: number,
  height?: number
}

export interface EdgeInset {
  top?: number,
  bottom?: number,
  left?: number,
  right?: number
}

export interface Border {
  style?: BorderStyle,
  width?: number,
  color?: number,
  side?: BorderSide[]
}

export interface BorderRadius {
  topLeft?: number,
  topRight?: number,
  bottomLeft?: number,
  bottomRight?: number
}

export interface Shadow {
  color?: number,
  offsetX?: number,
  offsetY?: number,
  blur?: number,
  spread?: number,
}

export interface TextStyle {
  size?: number,
  weight?: TextWeight,
  color?: number,
  shadow?: Shadow,
  letterSpacing?: number,
  wordSpacing?: number,
  decoration?: TextDecoration
}

export interface Span extends TextStyle {
  text?: string,
}

export interface Transform {
  type: 'rotation' | 'transition',
  value: number | Transition
}

export interface Transition {
  x?: number,
  y?: number,
  z?: number
}

interface Gradient {
  type?: 'linear' | 'radial',
  colors: number[]
}
export interface LinearGradient extends Gradient {
  begin?: Alignment,
  end?: Alignment
}
export interface RadialGradient extends Gradient {
  center?: Alignment,
  radius?: number
}

export interface BasicWidgetNormalProps {
  key?: any,
  ref?: RefCallback,
  width?: number,
  height?: number,
  minWidth?: number,
  minHeight?: number,
  maxWidth?: number,
  maxHeight?: number,
  padding?: number | EdgeInset,
  margin?: number | EdgeInset,
  backgroundColor?: number,
  backgroundGradient?: LinearGradient | RadialGradient,
  border?: Border,
  borderRadius?: number | BorderRadius,
  boxShadow?: Shadow,
  absolute?: EdgeInset,
  flex?: number,
  disabled?: boolean,
  opacity?: number,
  tapOpacity?: number,
  transform?: Transform,
  onTap?: EventCallback,
  onLongTap?: EventCallback,
  onPan?: EventCallback,
  onLayout?: EventCallback,
  children?: ThreshWidget[],
}

export interface PageProps {
  appBar?: AppBar,
  backgroundColor?: number,
  children?: ThreshWidget[],
  onShow?: EventCallback,
  onHide?: EventCallback,
  beforePop?: EventCallback,
}

export interface AppBarProps {
  ref?: RefCallback,
  title?: string,
  titleView?: ThreshWidget,
  titleColor?: number,
  titleSize?: number,
  titleWeight?: TextWeight,
  centerTitle?: boolean,
  elevation?: boolean,
  showLeadingButton?: boolean,
  leading?: ThreshWidget,
  buttons?: ThreshWidget[],
  statusTextLight?: boolean,
  backgroundColor?: number
}

export interface ContainerProps extends BasicWidgetNormalProps {
  row?: boolean,
  wrap?: boolean,
  reverse?: boolean,
  relative?: boolean,
  justifyContent?: JustifyContent,
  mainAxisAlignment?: JustifyContent,
  alignItems?: AlignItems,
  crossAxisAlignment?: AlignItems,
  alignContent?: AlignContent
}

export interface ScrollViewProps extends BasicWidgetNormalProps {
  direction?: Direction,
  onScroll?: EventCallback
}
export interface ListViewProps extends ScrollViewProps {
  refreshColor?: number,
  refreshBackgroundColor?: number,
  onRefresh?: AsyncEventCallback,
  onLoadMore?: AsyncEventCallback
}
export interface NestScrollViewProps extends BasicWidgetNormalProps {
  appBar?: AppBar,
  offset?: number,
  backgroundView: ThreshWidget,
  maskView?: ThreshWidget,
  fixedBottomView?: ThreshWidget,
  onScroll?: EventCallback,
  onDragStatusChange?: EventCallback,
}

export interface SwipeActionsViewProps extends BasicWidgetNormalProps {
  content: ThreshWidget,
  swipeSide?: 'left' | 'right' | 'top' | 'bottom',
  swipeMaxDistance?: number,
  autoClose?: boolean,
  open?: boolean,
  actions?: ThreshWidget[],
  onActionsOpen?: EventCallback,
  onActionsClose?: EventCallback
}

export interface NativeViewProps extends BasicWidgetNormalProps {
  type?: string,
  params?: any,
  onLoad?: EventCallback
}

export interface SwiperViewProps extends BasicWidgetNormalProps {
  row?: boolean,
  initIndex?: number,
  onChange?: EventCallback
}

export interface TextProps extends BasicWidgetNormalProps, Span {
  richText?: Span | Span[],
  align?: TextAlign,
  lineHeight?: number,
  wrap?: boolean,
  overflow?: TextOverflow,
  maxLines?: number,
}

export interface IconProps extends BasicWidgetNormalProps {
  type: IconType,
  size?: number,
  color?: number
}

export interface ImageProps extends BasicWidgetNormalProps {
  src: string,
  placeholder?: string,
  fit?: ImageFit,
  fadeIn?: boolean,
  onLoad?: EventCallback
}

export interface SpinProps extends BasicWidgetNormalProps {
  duration?: number,
  content: ThreshWidget
}

export interface RefreshProps extends BasicWidgetNormalProps {
  color?: number,
  secondColor?: number,
  size?: number,
  strokeWidth?: number
}

export interface NoticeBarProps extends BasicWidgetNormalProps {
  speed?: number,
  gutter?: number,
  prefix?: number,
  suffix?: number
}

export interface ButtonProps extends BasicWidgetNormalProps {
  child?: ThreshWidget[]
}
export interface RadioProps extends BasicWidgetNormalProps {
  value: string,
  groupValue: string,
  title?: ThreshWidget,
  activeColor?: number,
  onChange?: EventCallback
}

export interface CheckboxProps extends BasicWidgetNormalProps {
  value: boolean,
  title?: ThreshWidget,
  activeColor?: number,
  onChange?: EventCallback
}

export interface InputProps extends BasicWidgetNormalProps {
  value?: string,
  disabled?: boolean,
  autofocus?: boolean,
  maxLines?: number,
  maxLength?: number,
  textAlign?: TextAlign,
  textStyle?: TextStyle,
  placeholder?: string,
  placeholderStyle?: TextStyle,
  cursorColor?: number,
  keyboardType?: KeyboardType,
  onChange?: EventCallback,
  onFocus?: EventCallback,
  onBlur?: EventCallback
}
