import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 8.50195V21.002', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 21.002H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21 15.002H14V17.5179C14 19.4421 15.567 21.002 17.5 21.002C19.433 21.002 21 19.4421 21 17.5179V15.002Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17.5 11.002V15.002', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M17.0001 6.00195H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M5.5 8.5H3C2.44772 8.5 2 8.05228 2 7.5V4C2 3.44772 2.44772 3 3 3H19C19.5523 3 20 3.44772 20 4V10C20 10.5523 19.5523 11 19 11H15.677C15.2681 11 14.9004 10.751 14.7486 10.3714L14.2514 9.12861C14.0996 8.74895 13.7319 8.5 13.323 8.5H9.99653V17.0553C9.99653 18.4126 10.9569 20.8131 13.8012 21.0006', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mixer',
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
            _hoisted6
        ])
    }
})
