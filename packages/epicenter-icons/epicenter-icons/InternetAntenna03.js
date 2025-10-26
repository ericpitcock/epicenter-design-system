import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12V22M9 22H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InternetAntenna03',
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
