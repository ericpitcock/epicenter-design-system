import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 6C18.3284 6 19 5.32843 19 4.5C19 3.67157 18.3284 3 17.5 3C16.6716 3 16 3.67157 16 4.5C16 5.32843 16.6716 6 17.5 6Z' })
const _hoisted2 = h('path', { 'd': 'M17.5 20C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11C15.0147 11 13 13.0147 13 15.5C13 17.9853 15.0147 20 17.5 20Z' })
const _hoisted3 = h('path', { 'd': 'M2 8H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'bevel' })
const _hoisted4 = h('path', { 'd': 'M17.5 6V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'bevel' })
const _hoisted5 = h('path', { 'd': 'M2 6V21', 'stroke-linecap': 'round', 'stroke-linejoin': 'bevel' })
const _hoisted6 = h('path', { 'd': 'M2 20C2 13.3726 7.37258 8 14 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'bevel' })
const _hoisted7 = h('path', { 'd': 'M18.5 16.5L17.5 16V14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HangingClock',
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
            _hoisted7
        ])
    }
})
