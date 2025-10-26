import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22C16.5 22 21 17 21 10V3C18.7891 4.2275 15.5761 5 12 5C8.42392 5 5.21093 4.2275 3 3V10C3 17 7.5 22 12 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6.5 10C6.86849 9.69313 7.40399 9.5 8 9.5C8.59601 9.5 9.13151 9.69313 9.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15.7C13.192 15.7 14.263 15.4296 15 15C15 15 14.5 18 12 18C9.5 18 9 15 9 15C9.73698 15.4296 10.808 15.7 12 15.7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14.5 10C14.8685 9.69313 15.404 9.5 16 9.5C16.596 9.5 17.1315 9.69313 17.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MaskTheater01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 25',
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
