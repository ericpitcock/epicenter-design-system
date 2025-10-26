import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.5 18.043H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 6.5V2L10.5 4.5H13.5L16.5 2V6.5L14 9H10L7.5 6.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 9L9.07246 15.4928C9.02492 15.8255 8.89426 16.141 8.69256 16.4099L6.4 19.4667C6.14036 19.8129 6 20.2339 6 20.6667V22H18V20.6667C18 20.2339 17.8596 19.8129 17.6 19.4667L15.3074 16.4099C15.1057 16.141 14.9751 15.8255 14.9275 15.4928L14 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chess01',
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
