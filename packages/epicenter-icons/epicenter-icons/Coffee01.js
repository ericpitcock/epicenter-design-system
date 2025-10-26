import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 7L17.2314 20.2643C17.0989 21.2579 16.2514 22 15.249 22L8.75103 22C7.74863 22 6.90106 21.2579 6.76858 20.2643L5 7', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 7L18.1522 4.0326C18.0526 3.68409 17.8673 3.35937 17.5632 3.16211C15.0646 1.54115 8.81118 1.68446 6.44119 3.1663C6.13386 3.35846 5.9474 3.68409 5.84783 4.0326L5 7', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 7H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('ellipse', { 'cx': '12', 'cy': '14.5', 'rx': '2', 'ry': '2.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Coffee01',
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
            _hoisted4
        ])
    }
})
