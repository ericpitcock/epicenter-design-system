import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M1.99988 2L21.9999 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M1.99988 14L21.9999 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.99988 17C5.44759 17 4.99988 17.4477 4.99988 18L4.99988 21C4.99988 21.5523 5.44759 22 5.99988 22L17.9999 22C18.5522 22 18.9999 21.5523 18.9999 21V18C18.9999 17.4477 18.5522 17 17.9999 17L5.99988 17Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M8.99988 5C8.44759 5 7.99988 5.44772 7.99988 6L7.99988 9C7.99988 9.55229 8.44759 10 8.99988 10L14.9999 10C15.5522 10 15.9999 9.55228 15.9999 9V6C15.9999 5.44772 15.5522 5 14.9999 5L8.99988 5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DistributeVerticalTop',
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
