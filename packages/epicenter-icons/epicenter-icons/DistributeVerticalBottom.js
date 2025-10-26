import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M1.99988 22L21.9999 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M1.99988 10L21.9999 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.0038 6C16.0038 6.55228 15.5561 7 15.0038 7L9.00378 7C8.4515 7 8.00378 6.55229 8.00378 6L8.00378 3C8.00378 2.44772 8.4515 2 9.00378 2L15.0038 2C15.5561 2 16.0038 2.44772 16.0038 3V6Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.9999 18C18.9999 18.5523 18.5522 19 17.9999 19L5.99988 19C5.44759 19 4.99988 18.5523 4.99988 18L4.99988 15C4.99988 14.4477 5.44759 14 5.99988 14L17.9999 14C18.5522 14 18.9999 14.4477 18.9999 15V18Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DistributeVerticalBottom',
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
