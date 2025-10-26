import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 2V5.5M12 9V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 9C5 4.2 9.66667 2.33333 12 2C14.3333 2.33333 19 4.2 19 9C19 12 17.5 14 17.5 14L17.0582 17.5347C16.7393 20.0857 14.5708 22 12 22C9.4292 22 7.26071 20.0857 6.94184 17.5347L6.5 14C6.5 14 5 12 5 9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 14C16.2712 12.7888 14.2656 12 12 12C9.73444 12 7.72882 12.7888 6.5 14' })
const _hoisted4 = h('path', { 'd': 'M12.5 5.5H11.5C10.9477 5.5 10.5 5.94772 10.5 6.5V8C10.5 8.55228 10.9477 9 11.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8V6.5C13.5 5.94772 13.0523 5.5 12.5 5.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mouse17',
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
