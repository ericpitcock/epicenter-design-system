import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.5 5.5V2M12.5 12V9', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 22C18.5 22 20 17.49 20 12C20 6.50998 18.5 2 12.5 2C6.49993 2 5 6.50996 5 12C5 17.49 6.49993 22 12.5 22Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 5.5H12C11.4477 5.5 11 5.94772 11 6.5V8C11 8.55228 11.4477 9 12 9H13C13.5523 9 14 8.55228 14 8V6.5C14 5.94772 13.5523 5.5 13 5.5Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5.5 12H19.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse11',
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
