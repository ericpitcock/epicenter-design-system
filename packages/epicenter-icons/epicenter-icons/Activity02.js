import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 14.5L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L16.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.5 5C21.5 6.38071 20.3807 7.5 19 7.5C17.6193 7.5 16.5 6.38071 16.5 5C16.5 3.61929 17.6193 2.5 19 2.5C20.3807 2.5 21.5 3.61929 21.5 5Z' })
const _hoisted3 = h('path', { 'd': 'M13.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Activity02',
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
