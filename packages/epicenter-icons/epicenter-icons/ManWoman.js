import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.5 22L19.5007 15.9996H22L22 14.9996L19.6286 9.86191C19.2454 9.03167 18.4144 8.5 17.5 8.5C16.5856 8.5 15.7546 9.03169 15.3714 9.86195L13 15V15.9996H15.5007V22H19.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 16V10.5C10 9.39543 9.10457 8.5 8 8.5H4C2.89543 8.5 2 9.39543 2 10.5V16H4V22H8V16H10Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M19.5 4C19.5 5.10457 18.6046 6 17.5 6C16.3954 6 15.5 5.10457 15.5 4C15.5 2.89543 16.3954 2 17.5 2C18.6046 2 19.5 2.89543 19.5 4Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ManWoman',
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
