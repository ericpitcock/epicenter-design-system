import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.002 2V5M12.002 10V14M12.002 19V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 10C8.44772 10 8 9.55228 8 9L8 6.00041C8 5.44796 8.44796 5.00018 9.00041 5.00041L15.0004 5.00285C15.5525 5.00307 16 5.45072 16 6.00285L16 9C16 9.55228 15.5523 10 15 10H9Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5 19C4.44772 19 4 18.5523 4 18L4 15.0002C4 14.4478 4.44784 14.0001 5.0002 14.0002L19.0002 14.0031C19.5524 14.0032 20 14.4508 20 15.0031L20 18C20 18.5523 19.5523 19 19 19H5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlignHorizontalCenter',
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
