import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 14L12 22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 22H6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '12.5', 'r': '1.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('ellipse', { 'cx': '12', 'cy': '5', 'rx': '2', 'ry': '3', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17.2624 17.9508C15.8454 17.1373 15.1388 15.7164 15.6842 14.7771C16.2297 13.8377 17.8205 13.7357 19.2376 14.5492C20.6546 15.3627 21.3612 16.7836 20.8158 17.7229C20.2703 18.6623 18.6795 18.7643 17.2624 17.9508Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M6.73756 17.9508C8.1546 17.1373 8.86118 15.7164 8.31576 14.7771C7.77035 13.8377 6.17947 13.7357 4.76244 14.5492C3.3454 15.3627 2.63882 16.7836 3.18424 17.7229C3.72965 18.6623 5.32053 18.7643 6.73756 17.9508Z', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M12 8V11', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M13 13L16 15', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M11 13L8 15', 'stroke-linejoin': 'round' })
const _hoisted10 = h('path', { 'd': 'M7.5 3C4.80989 4.5066 3 7.32255 3 10.5478C3 11.0426 3.0426 11.5277 3.12444 12M16.5 3C19.1901 4.5066 21 7.32255 21 10.5478C21 11.0426 20.9574 11.5277 20.8756 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WindPower01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6,
            _hoisted7,
            _hoisted8,
            _hoisted9,
            _hoisted10
        ])
    }
})
