import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 6H16C14.8954 6 14 6.89543 14 8V12C14 13.1046 14.8954 14 16 14H20C21.1046 14 22 13.1046 22 12V8C22 6.89543 21.1046 6 20 6Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 14H16C14.8954 14 14 14.8954 14 16V20C14 21.1046 14.8954 22 16 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 14H8C6.89543 14 6 14.8954 6 16V20C6 21.1046 6.89543 22 8 22H12C13.1046 22 14 21.1046 14 20V16C14 14.8954 13.1046 14 12 14Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BlockGame',
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
