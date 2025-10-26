import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 14H13.5C12.9477 14 12.5 14.4477 12.5 15V15.5C12.5 16.0523 12.9477 16.5 13.5 16.5H14.5C15.0523 16.5 15.5 16.9477 15.5 17.5V18C15.5 18.5523 15.0523 19 14.5 19H12.5M21 14H19C18.4477 14 18 14.4477 18 15V15.5C18 16.0523 18.4477 16.5 19 16.5H20C20.5523 16.5 21 16.9477 21 17.5V18C21 18.5523 20.5523 19 20 19H18M10 18C10 18.5523 9.55228 19 9 19H7.5C6.94772 19 6.5 18.5523 6.5 18V15C6.5 14.4477 6.94772 14 7.5 14H9C9.55228 14 10 14.4477 10 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 11V9L12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 2V7C12 8.10457 12.8954 9 14 9H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CssFile02',
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
