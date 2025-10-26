import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 3H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4.5 2.99805L4.5 15.9789L11.9363 20.981C11.97 21.0037 12.0141 21.0037 12.0478 20.9811L19.5 15.9789V2.99805', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 13H9.5M14.5 8H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Honor',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
