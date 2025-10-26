import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.0078 10.5082C11.1794 10.5082 10.5078 11.1798 10.5078 12.0082C10.5078 12.8366 11.1794 13.5082 12.0078 13.5082C12.8362 13.5082 13.5078 12.8366 13.5078 12.0082C13.5078 11.1798 12.8362 10.5082 12.0078 10.5082ZM12.0078 10.5082V6.99902M15.0147 15.0198L13.0661 13.0712', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Time01',
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
