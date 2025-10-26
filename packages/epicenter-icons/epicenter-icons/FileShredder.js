import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12.9976H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 12.9978L4.01355 3.99699C4.01522 2.89273 4.91151 1.99877 6.01577 2L12.9924 2.00776L20 8.99481V12.9978M12.9966 2.49778V6.99778C12.9966 8.10235 13.892 8.99778 14.9966 8.99778H19.4998', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 15.9976V16.9976M10 15.9976V21.9976M14 15.9976V17.9976M18 15.9976V19.9976', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FileShredder',
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
