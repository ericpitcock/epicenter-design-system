import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 6H6V2H2V6Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 6H22V2H18V6Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 6H14V2H10V6Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 22H6V18H2V22Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M2 14H6V10H2V14Z', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 22H22V18H18V22Z', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M18 14H22V10H18V14Z', 'stroke-linejoin': 'round' })
const _hoisted8 = h('path', { 'd': 'M10 22H14V18H10V22Z', 'stroke-linejoin': 'round' })
const _hoisted9 = h('path', { 'd': 'M10 14H14V10H10V14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'More03',
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
            _hoisted9
        ])
    }
})
