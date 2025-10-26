import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 20.5L7.41286 17.0871M7.41286 17.0871C8.21715 17.8914 9.32826 18.3889 10.5556 18.3889C13.0102 18.3889 15 16.399 15 13.9444C15 11.4898 13.0102 9.5 10.5556 9.5C8.10096 9.5 6.11111 11.4898 6.11111 13.9444C6.11111 15.1717 6.60857 16.2829 7.41286 17.0871Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 15V5.5C2 4.39543 2.89543 3.5 4 3.5H20C21.1046 3.5 22 4.39543 22 5.5V16C22 17.1046 21.1046 18 20 18H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Seo',
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
