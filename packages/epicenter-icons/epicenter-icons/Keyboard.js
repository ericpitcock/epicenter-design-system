import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 7H5C3.34315 7 2 8.34315 2 10V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V10C22 8.34315 20.6569 7 19 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7V5.53078C12 4.92498 12.4123 4.39693 13 4.25V4.25C13.5877 4.10307 14 3.57502 14 2.96922V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 12L8 12M11.5 12L12.5 12M16 12L17 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 17L17 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Keyboard',
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
