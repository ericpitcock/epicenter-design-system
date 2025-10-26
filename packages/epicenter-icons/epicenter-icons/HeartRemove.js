import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 13.4999L18.5 15.9999M18.5 15.9999L21 18.4999M18.5 15.9999L21 13.4999M18.5 15.9999L16 18.4999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13 19.8564C12.3834 20.2699 12 20.4999 12 20.4999C12 20.4999 2 14.4999 2 8.69438C2 5.82557 4.10526 3.49994 7 3.49994C8.5 3.49994 10 3.99994 12 5.99994C14 3.99994 15.5 3.49994 17 3.49994C19.8947 3.49994 22 5.82557 22 8.69438C22 9.12935 21.9439 9.5654 21.84 9.99994', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HeartRemove',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
